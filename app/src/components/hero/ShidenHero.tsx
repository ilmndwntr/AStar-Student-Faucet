import { useState } from "react";
import FaucetModal from "../modal/FaucetModal";
import SupportModal from "../modal/SupportModal";

const ShidenHero = () => {
  const [openSupport, setOpenSupport] = useState(false);
  const [openFaucet, setOpenFaucet] = useState(false);

  return (
    <>
      <SupportModal
        type="shiden"
        open={openSupport}
        onChange={setOpenSupport}
      />
      <FaucetModal type="shiden" open={openFaucet} onChange={setOpenFaucet} />
      <div className="hero hero-content mx-auto flex-col text-center sm:mt-32">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Shiden <span className="text-6xl text-red-500">{`"Student"`}</span>
            Faucet
          </h1>
          <h2 className="text-center text-2xl font-bold text-red-500">
            Shiden RPC may have a traffic.😭
          </h2>
          <p className="py-6">
            This is Student-only Faucet more powerful than official Faucet. It
            is informal but run by students. And this Faucet is made possible by
            the support of volunteers. Therefore, it sometimes becomes
            unavailable.
          </p>
        </div>
        <div className="flex w-full max-w-2xl items-center justify-center gap-4">
          <button
            className="btn btn-primary"
            onClick={() => setOpenFaucet(!openFaucet)}
          >
            Get SDN
          </button>
          <div className="text-xl font-bold">OR</div>
          <button
            className="btn btn-secondary"
            onClick={() => setOpenSupport(!openSupport)}
          >
            Support Faucet
          </button>
        </div>
      </div>
    </>
  );
};
export default ShidenHero;
