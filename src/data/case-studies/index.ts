import { fishbowlGo } from "./fishbowl-go"
import { travelpass } from "./travelpass"
import { alignedWest } from "./alignedwest-chiropractic"
import { trubalance } from "./trubalance-bodywork"
import { domo } from "./domo"
import type { CaseStudy } from "@/components/templates/types"

export const caseStudies: CaseStudy[] = [
  fishbowlGo,
  travelpass,
  alignedWest,
  trubalance,
  domo
]

export const caseStudySummaries = caseStudies.map(
  (study) => study.summary
)