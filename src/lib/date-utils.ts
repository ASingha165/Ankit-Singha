/**
 * Reusable date, timezone, recruitment, and milestone calculation utilities.
 * Follows the Asia/Kolkata timezone standard (+05:30) for accurate Indian local time.
 */

export const TIMEZONE = "Asia/Kolkata";

/**
 * Returns a Date object adjusted to represent Asia/Kolkata local time components.
 */
export function getKolkataDate(referenceDate: Date = new Date()): Date {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const parts = formatter.formatToParts(referenceDate);
  const map: Record<string, number> = {};
  for (const part of parts) {
    if (part.type !== "literal") {
      map[part.type] = parseInt(part.value, 10);
    }
  }

  return new Date(
    map.year || referenceDate.getFullYear(),
    (map.month ? map.month - 1 : referenceDate.getMonth()),
    map.day || referenceDate.getDate(),
    map.hour || referenceDate.getHours(),
    map.minute || referenceDate.getMinutes(),
    map.second || referenceDate.getSeconds()
  );
}

/**
 * Retrieves the current year in Asia/Kolkata time.
 */
export function getCurrentYear(referenceDate: Date = new Date()): number {
  return getKolkataDate(referenceDate).getFullYear();
}

/**
 * Configuration for recruitment seasons.
 */
export interface RecruitmentConfig {
  /** 1-indexed start month for summer recruitment window (e.g. 5 for May) */
  summerStartMonth: number;
  /** 1-indexed end month for summer recruitment window (e.g. 8 for August) */
  summerEndMonth: number;
  /** Off-season recruitment message */
  defaultHeadline: string;
  /** Summer recruitment message template (replaces {YEAR} with current year) */
  summerTemplate: string;
}

export const defaultRecruitmentConfig: RecruitmentConfig = {
  // In India and tech industry, summer recruitment/internship season spans May (5) to August (8)
  summerStartMonth: 5,
  summerEndMonth: 8,
  defaultHeadline: "Open to Internship Opportunities & Applied AI Collaborations",
  summerTemplate: "Available for Summer {YEAR} Internships & Applied AI Collaborations",
};

/**
 * Determines whether the given date falls inside the active summer recruitment window.
 */
export function isSummerRecruitmentActive(
  config: RecruitmentConfig = defaultRecruitmentConfig,
  date: Date = new Date()
): boolean {
  const kDate = getKolkataDate(date);
  const month = kDate.getMonth() + 1; // 1 to 12

  if (config.summerStartMonth <= config.summerEndMonth) {
    return month >= config.summerStartMonth && month <= config.summerEndMonth;
  }
  // Handles wrap-around across year end (e.g. Dec to Feb)
  return month >= config.summerStartMonth || month <= config.summerEndMonth;
}

/**
 * Dynamically generates the recruitment status string based on the current date.
 */
export function getRecruitmentStatusText(
  config: RecruitmentConfig = defaultRecruitmentConfig,
  date: Date = new Date()
): string {
  const kDate = getKolkataDate(date);
  const currentYear = kDate.getFullYear();
  const isSummer = isSummerRecruitmentActive(config, date);

  if (isSummer) {
    return config.summerTemplate.replace("{YEAR}", currentYear.toString());
  }
  return config.defaultHeadline;
}

/**
 * Generates the contact form placeholder for the topic/subject.
 */
export function getRecruitmentPlaceholder(
  config: RecruitmentConfig = defaultRecruitmentConfig,
  date: Date = new Date()
): string {
  const kDate = getKolkataDate(date);
  const currentYear = kDate.getFullYear();
  const isSummer = isSummerRecruitmentActive(config, date);

  if (isSummer) {
    return `Summer ${currentYear} Internship Opportunity / Project Collaboration`;
  }
  return `Internship Opportunity / Project Collaboration`;
}

/**
 * Academic progression for Ankit Singha's B.Tech in CSE (AI & ML) at Brainware University (2024–2028).
 */
export interface AcademicProgress {
  degree: string;
  university: string;
  startYear: number;
  expectedGraduationYear: number;
  semester: number;
  semesterRoman: string;
  yearOfStudy: number;
  yearOrdinal: string;
  isGraduated: boolean;
  statusLabel: string;
  dateRangeLabel: string;
  progressPercent: number;
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const ORDINAL_SUFFIXES = ["1st", "2nd", "3rd", "4th"];

export function getAcademicProgress(date: Date = new Date()): AcademicProgress {
  const kDate = getKolkataDate(date);
  const year = kDate.getFullYear();
  const month = kDate.getMonth() + 1; // 1-12

  const startYear = 2024;
  const startMonth = 8; // August 2024
  const expectedGraduationYear = 2028;
  const graduationMonth = 6; // June 2028

  // Check if graduated
  if (
    year > expectedGraduationYear ||
    (year === expectedGraduationYear && month > graduationMonth)
  ) {
    return {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      university: "Brainware University",
      startYear,
      expectedGraduationYear,
      semester: 8,
      semesterRoman: "VIII",
      yearOfStudy: 4,
      yearOrdinal: "4th",
      isGraduated: true,
      statusLabel: "B.Tech Graduate (Alumnus)",
      dateRangeLabel: `${startYear} — ${expectedGraduationYear}`,
      progressPercent: 100,
    };
  }

  // Calculate semester (8 semesters across 4 years):
  // 2024: Aug-Dec -> Sem 1 (1st Year)
  // 2025: Jan-Jun -> Sem 2 (1st Year), Jul-Dec -> Sem 3 (2nd Year)
  // 2026: Jan-Jun -> Sem 4 (2nd Year), Jul-Dec -> Sem 5 (3rd Year)
  // 2027: Jan-Jun -> Sem 6 (3rd Year), Jul-Dec -> Sem 7 (4th Year)
  // 2028: Jan-Jun -> Sem 8 (4th Year)
  let semester = 1;

  if (year === 2024) {
    semester = 1;
  } else {
    const elapsedYears = year - startYear;
    // Base semester for Jan of this year
    semester = elapsedYears * 2;
    // If we have entered Autumn semester (July onwards), advance to odd semester
    if (month >= 7) {
      semester += 1;
    }
  }

  // Clamp within 1 to 8
  semester = Math.max(1, Math.min(8, semester));
  const yearOfStudy = Math.ceil(semester / 2);
  const semesterRoman = ROMAN_NUMERALS[semester - 1];
  const yearOrdinal = ORDINAL_SUFFIXES[yearOfStudy - 1];
  const statusLabel = `Currently in Semester ${semesterRoman} / ${yearOrdinal} Year`;
  const dateRangeLabel = `${startYear} — Present`;
  const progressPercent = Math.round((semester / 8) * 100);

  return {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    university: "Brainware University",
    startYear,
    expectedGraduationYear,
    semester,
    semesterRoman,
    yearOfStudy,
    yearOrdinal,
    isGraduated: false,
    statusLabel,
    dateRangeLabel,
    progressPercent,
  };
}

/**
 * Milestone status definition.
 */
export type MilestoneState = "completed" | "in-progress" | "upcoming" | "overdue";

export interface MilestoneDateInput {
  id: string;
  startDate?: string;
  completionDate?: string;
  targetDate?: string;
  isConfirmed?: boolean;
  recurrenceRule?: "annual";
  recurrenceMonth?: number; // 1-12
}

/**
 * Evaluates the accurate lifecycle state of any milestone against a target date.
 */
export function evaluateMilestoneState(
  item: MilestoneDateInput,
  currentDate: Date = new Date()
): {
  state: MilestoneState;
  stateLabel: string;
  isOverdue: boolean;
} {
  const kDate = getKolkataDate(currentDate);

  // 1. Explicit completion date -> Completed
  if (item.completionDate) {
    return {
      state: "completed",
      stateLabel: "Completed",
      isOverdue: false,
    };
  }

  // 2. Has startDate
  if (item.startDate) {
    const start = new Date(item.startDate);
    // If start is in future
    if (start > kDate) {
      return {
        state: "upcoming",
        stateLabel: item.isConfirmed ? "Confirmed Upcoming" : "Planned",
        isOverdue: false,
      };
    }

    // Started in the past or present: check target deadline if defined
    if (item.targetDate) {
      const target = new Date(item.targetDate);
      if (target < kDate) {
        return {
          state: "overdue",
          stateLabel: "Review In Progress",
          isOverdue: true,
        };
      }
    }

    // Ongoing active milestone
    return {
      state: "in-progress",
      stateLabel: "In Progress",
      isOverdue: false,
    };
  }

  return {
    state: "completed",
    stateLabel: "Completed",
    isOverdue: false,
  };
}
