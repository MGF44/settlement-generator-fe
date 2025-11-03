const ageGroup: Record<string, string> = {
  RANDOM: "Random",
  CHILD: "Child",
  YOUNG_ADULT: "Young Adult",
  ADULT: "Adult",
  SENIOR: "Senior",
};

type AgeGroup = keyof typeof ageGroup;

const useAgeGroup = () => {
  const ageGroupOptions = Object.entries(ageGroup).map(([value, label]) => ({
    value,
    label,
  }));

  return {
    ageGroupOptions,
  };
};

export { useAgeGroup, type AgeGroup };
