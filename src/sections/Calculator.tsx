import { useMemo, useState } from "react";
import { Calculator, Zap, IndianRupee, TrendingUp } from "lucide-react";

export default function CalculatorSection() {
  const [monthlyBill, setMonthlyBill] = useState<string>("");
  const [roofArea, setRoofArea] = useState<string>("");

  const parsed = useMemo(() => {
    const bill = Number(monthlyBill);
    const roof = Number(roofArea);
    return { bill, roof };
  }, [monthlyBill, roofArea]);

  const calc = useMemo(() => {
    const costPerUnit = 8;
    const sqFtPerKW = 120;
    const unitsPerMonth = 120; // per 1kW (based on 120 sq.ft)
    const panelPricePerKW = 65000;
    const subsidyRate = 0.3;

    const bill = parsed.bill;
    const roof = parsed.roof;

    if (!monthlyBill.trim() && !roofArea.trim()) {
      return {
        systemSizeKW: 0,
        requiredRoofArea: 0,
        installationCost: 0,
        subsidyAmount: 0,
        finalCostAfterSubsidy: 0,
        monthlySavings: 0,
        annualSavings: 0,
        paybackYears: 0,
        savings25Years: 0,
        error: null as string | null,
      };
    }

    const nextErrorParts: string[] = [];
    if (!Number.isFinite(bill) || bill <= 0) nextErrorParts.push("Enter a valid monthly bill.");
    if (!Number.isFinite(roof) || roof <= 0) nextErrorParts.push("Enter a valid roof area.");

    if (nextErrorParts.length) {
      return {
        systemSizeKW: 0,
        requiredRoofArea: 0,
        installationCost: 0,
        subsidyAmount: 0,
        finalCostAfterSubsidy: 0,
        monthlySavings: 0,
        annualSavings: 0,
        paybackYears: 0,
        savings25Years: 0,
        error: nextErrorParts[0],
      };
    }

    const systemSizeKW = roof / sqFtPerKW;
    const requiredRoofArea = systemSizeKW * sqFtPerKW;

    const monthlySolarUnits = systemSizeKW * unitsPerMonth;
    const installationCost = systemSizeKW * panelPricePerKW;
    const subsidyAmount = installationCost * subsidyRate;
    const finalCostAfterSubsidy = installationCost - subsidyAmount;

    const monthlySavings = bill - monthlySolarUnits * costPerUnit;
    const annualSavings = monthlySavings * 12;

    const paybackYears = annualSavings > 0 ? finalCostAfterSubsidy / annualSavings : Infinity;
    const savings25Years = annualSavings > 0 ? annualSavings * 25 : 0;

    return {
      systemSizeKW,
      requiredRoofArea,
      installationCost,
      subsidyAmount,
      finalCostAfterSubsidy,
      monthlySavings,
      annualSavings,
      paybackYears,
      savings25Years,
      error: null as string | null,
    };
  }, [monthlyBill, roofArea, parsed.bill, parsed.roof]);

  const derivedError = calc.error;

  const formatINR = (n: number) => {
    if (!Number.isFinite(n)) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);
  };

  const formatNumber = (n: number) => {
    if (!Number.isFinite(n)) return "-";
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(n);
  };

  return (
    <section id="calculator" className="py-24 bg-[var(--surface)]">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Solar Calculator</span>
          <h2 className="section-heading">Estimate Your Solar Savings</h2>
          <p className="section-sub">
            Get an approximate idea of your electricity savings after switching to solar energy.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="card p-8 sm:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-tile">
                <Calculator size={22} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">Quick Estimate</h3>
            </div>

            <div className="space-y-5">
              <input
                type="number"
                placeholder="Monthly Electricity Bill"
                className="input-field"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                aria-label="Monthly Electricity Bill"
              />

              <input
                type="number"
                placeholder="Roof Area (sq.ft)"
                className="input-field"
                value={roofArea}
                onChange={(e) => setRoofArea(e.target.value)}
                aria-label="Roof Area"
              />

              {derivedError ? (
                <p className="text-sm text-red-500" aria-live="polite">
                  {derivedError}
                </p>
              ) : null}

              <button
                className="btn-primary w-full"
                type="button"
                aria-label="Calculate Savings"
                onClick={() => {
                  // Live-calculation runs while typing; keep button for UX.
                  setMonthlyBill((v) => v);
                }}
              >
                Calculate Savings
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="card p-7 flex items-center gap-5">
              <div className="icon-tile">
                <Zap size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[var(--text)]">Estimated System</h4>
                <p className="text-sm text-[var(--text-light)]">
                  {!derivedError ? `${formatNumber(calc.systemSizeKW)}kW Solar Plant` : "-"}
                </p>
              </div>
            </div>

            <div className="card p-7 flex items-center gap-5">
              <div className="icon-tile text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10">
                <IndianRupee size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[var(--text)]">Monthly Savings</h4>
                <p className="text-sm text-[var(--text-light)]">
                  {!derivedError ? `₹${formatNumber(Math.max(0, calc.monthlySavings))}+` : "-"}
                </p>
              </div>
            </div>

            <div className="card p-7 flex items-center gap-5">
              <div className="icon-tile text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10">
                <TrendingUp size={22} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[var(--text)]">ROI</h4>
                <p className="text-sm text-[var(--text-light)]">
                  {!derivedError && Number.isFinite(calc.paybackYears)
                    ? `${formatNumber(calc.paybackYears)} Years`
                    : "-"}
                </p>
              </div>
            </div>

            {!derivedError ? (
              <div className="mt-2 grid gap-3 lg:grid-cols-2">
                <div className="card p-5 flex items-center justify-between gap-4">
                  <div className="text-sm text-[var(--text-light)]">Required Roof Area</div>
                  <div className="font-bold text-[var(--text)]">{formatNumber(calc.requiredRoofArea)} sq.ft</div>
                </div>
                <div className="card p-5 flex items-center justify-between gap-4">
                  <div className="text-sm text-[var(--text-light)]">Estimated Installation Cost</div>
                  <div className="font-bold text-[var(--text)]">{formatINR(calc.installationCost)}</div>
                </div>
                <div className="card p-5 flex items-center justify-between gap-4">
                  <div className="text-sm text-[var(--text-light)]">Government Subsidy (30%)</div>
                  <div className="font-bold text-[var(--text)]">{formatINR(calc.subsidyAmount)}</div>
                </div>
                <div className="card p-5 flex items-center justify-between gap-4">
                  <div className="text-sm text-[var(--text-light)]">Final Cost After Subsidy</div>
                  <div className="font-bold text-[var(--text)]">{formatINR(calc.finalCostAfterSubsidy)}</div>
                </div>
                <div className="card p-5 flex items-center justify-between gap-4">
                  <div className="text-sm text-[var(--text-light)]">Annual Savings</div>
                  <div className="font-bold text-[var(--text)]">{formatINR(calc.annualSavings)}</div>
                </div>
                <div className="card p-5 flex items-center justify-between gap-4">
                  <div className="text-sm text-[var(--text-light)]">25 Year Savings</div>
                  <div className="font-bold text-[var(--text)]">{formatINR(calc.savings25Years)}</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

