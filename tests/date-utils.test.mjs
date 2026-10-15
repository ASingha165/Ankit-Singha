import { test } from "node:test";
import assert from "node:assert/strict";

// Import modules
import {
  getKolkataDate,
  getCurrentYear,
  isSummerRecruitmentActive,
  getRecruitmentStatusText,
  getRecruitmentPlaceholder,
  getAcademicProgress,
  evaluateMilestoneState,
  defaultRecruitmentConfig,
} from "../src/lib/date-utils.ts";
import { getDynamicMilestones, rawMilestones } from "../src/data/achievements.ts";

test("1. Simulated date BEFORE summer recruitment period (March 15)", () => {
  const simulatedDate = new Date("2026-03-15T12:00:00Z");
  const isActive = isSummerRecruitmentActive(defaultRecruitmentConfig, simulatedDate);
  const text = getRecruitmentStatusText(defaultRecruitmentConfig, simulatedDate);
  const placeholder = getRecruitmentPlaceholder(defaultRecruitmentConfig, simulatedDate);

  assert.strictEqual(isActive, false);
  assert.strictEqual(text, "Open to Internship Opportunities & Applied AI Collaborations");
  assert.strictEqual(placeholder, "Internship Opportunity / Project Collaboration");
});

test("2. Simulated date DURING summer recruitment period (June 20)", () => {
  const simulatedDate = new Date("2026-06-20T12:00:00Z");
  const isActive = isSummerRecruitmentActive(defaultRecruitmentConfig, simulatedDate);
  const text = getRecruitmentStatusText(defaultRecruitmentConfig, simulatedDate);
  const placeholder = getRecruitmentPlaceholder(defaultRecruitmentConfig, simulatedDate);

  assert.strictEqual(isActive, true);
  assert.strictEqual(text, "Available for Summer 2026 Internships & Applied AI Collaborations");
  assert.strictEqual(placeholder, "Summer 2026 Internship Opportunity / Project Collaboration");
});

test("3. Simulated date AFTER summer recruitment period (October 16)", () => {
  const simulatedDate = new Date("2026-10-16T03:00:00Z");
  const isActive = isSummerRecruitmentActive(defaultRecruitmentConfig, simulatedDate);
  const text = getRecruitmentStatusText(defaultRecruitmentConfig, simulatedDate);

  assert.strictEqual(isActive, false);
  assert.strictEqual(text, "Open to Internship Opportunities & Applied AI Collaborations");
});

test("4. Year-end and new-year transitions (December 31 and January 1)", () => {
  const dec31 = new Date("2026-12-31T23:59:00+05:30");
  const jan1 = new Date("2027-01-01T00:01:00+05:30");
  const futureSummer = new Date("2027-06-15T12:00:00+05:30");

  assert.strictEqual(getCurrentYear(dec31), 2026);
  assert.strictEqual(getCurrentYear(jan1), 2027);

  assert.strictEqual(
    getRecruitmentStatusText(defaultRecruitmentConfig, dec31),
    "Open to Internship Opportunities & Applied AI Collaborations"
  );
  assert.strictEqual(
    getRecruitmentStatusText(defaultRecruitmentConfig, jan1),
    "Open to Internship Opportunities & Applied AI Collaborations"
  );
  // Transitions smoothly into next year's summer
  assert.strictEqual(
    getRecruitmentStatusText(defaultRecruitmentConfig, futureSummer),
    "Available for Summer 2027 Internships & Applied AI Collaborations"
  );
});

test("5. Academic progression across semesters (2024 to 2028)", () => {
  // Semester 1 in Autumn 2024
  const sem1 = getAcademicProgress(new Date("2024-10-15T12:00:00+05:30"));
  assert.strictEqual(sem1.semester, 1);
  assert.strictEqual(sem1.semesterRoman, "I");
  assert.strictEqual(sem1.yearOfStudy, 1);
  assert.strictEqual(sem1.statusLabel, "Currently in Semester I / 1st Year");

  // Semester 4 in Spring 2026
  const sem4 = getAcademicProgress(new Date("2026-03-20T12:00:00+05:30"));
  assert.strictEqual(sem4.semester, 4);
  assert.strictEqual(sem4.semesterRoman, "IV");
  assert.strictEqual(sem4.yearOfStudy, 2);

  // Semester 5 in Autumn 2026 (current semester)
  const sem5 = getAcademicProgress(new Date("2026-10-16T12:00:00+05:30"));
  assert.strictEqual(sem5.semester, 5);
  assert.strictEqual(sem5.semesterRoman, "V");
  assert.strictEqual(sem5.yearOfStudy, 3);
  assert.strictEqual(sem5.statusLabel, "Currently in Semester V / 3rd Year");

  // Graduation in late 2028
  const grad = getAcademicProgress(new Date("2028-08-01T12:00:00+05:30"));
  assert.strictEqual(grad.isGraduated, true);
  assert.strictEqual(grad.statusLabel, "B.Tech Graduate (Alumnus)");
});

test("6. Historical completed milestone preservation", () => {
  const milestone = {
    id: "google-ambassador-2026",
    startDate: "2026-09-01",
    completionDate: "2026-09-25",
  };
  const result = evaluateMilestoneState(milestone, new Date("2027-01-01"));
  assert.strictEqual(result.state, "completed");
  assert.strictEqual(result.isOverdue, false);
});

test("7. Milestone currently in progress", () => {
  const ongoing = {
    id: "active-btech",
    startDate: "2024-08-01",
    targetDate: "2028-06-30",
  };
  const result = evaluateMilestoneState(ongoing, new Date("2026-10-16"));
  assert.strictEqual(result.state, "in-progress");
  assert.strictEqual(result.isOverdue, false);
});

test("8. Future confirmed milestone", () => {
  const future = {
    id: "future-symposium",
    startDate: "2027-02-15",
    isConfirmed: true,
  };
  const result = evaluateMilestoneState(future, new Date("2026-10-16"));
  assert.strictEqual(result.state, "upcoming");
  assert.strictEqual(result.stateLabel, "Confirmed Upcoming");
});

test("9. Incomplete milestone whose target deadline has passed", () => {
  const overdueItem = {
    id: "past-deadline-goal",
    startDate: "2025-01-01",
    targetDate: "2025-06-01",
  };
  // Evaluated at 2026-10-16 (past target deadline with no completionDate)
  const result = evaluateMilestoneState(overdueItem, new Date("2026-10-16"));
  assert.strictEqual(result.state, "overdue");
  assert.strictEqual(result.isOverdue, true);
  // Must NOT be falsely marked completed
  assert.notStrictEqual(result.state, "completed");
});

test("10. Dynamic milestones list updates without mutating historical facts", () => {
  const dynamicList = getDynamicMilestones(new Date("2026-10-16"));

  // Check that completed milestones retain their historical dates
  const ambassador = dynamicList.find((m) => m.id === "google-ambassador-2026");
  assert.strictEqual(ambassador.date, "September 2026");
  assert.strictEqual(ambassador.status, "completed");

  const mygov = dynamicList.find((m) => m.id === "mygov-legacy-quiz");
  assert.strictEqual(mygov.date, "2024");
  assert.strictEqual(mygov.status, "completed");

  // Check that the academic milestone dynamically reflects current semester
  const academic = dynamicList.find((m) => m.id === "academic-degree");
  assert.strictEqual(academic.status, "in-progress");
  assert.match(academic.highlight, /Semester V \/ 3rd Year/);
});
