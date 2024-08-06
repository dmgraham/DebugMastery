type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

function getScreenBreakpoint(screenWidth: number): Breakpoint {
  const breakpoints = [
    { name: "2xl", value: 1536 },
    { name: "xl", value: 1280 },
    { name: "lg", value: 1024 },
    { name: "md", value: 768 },
    { name: "sm", value: 640 },
    { name: "xs", value: 0 },
  ];

  for (const breakpoint of breakpoints) {
    if (screenWidth >= breakpoint.value) {
      return breakpoint.name as Breakpoint;
    }
  }

  return "xs";
}

export type { Breakpoint };
export default getScreenBreakpoint;
