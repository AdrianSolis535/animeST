import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProfileDashboard from "./ProfileDashboard";
import type { UserProfile, Anime } from "./ProfileDashboard";

const THEME_KEY = "theme";
const DRAWER_ID = "app-drawer";

export default function PerfilPage(): JSX.Element {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem(THEME_KEY) || "light";
  });

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const user: UserProfile = {
    username: "Paco",
    email: "paco@example.com",
    avatarUrl: "/avatar.png",
  };
  const history: ReadonlyArray<Anime> = [];
  const favorites: ReadonlyArray<Anime> = [];

  return (
    <div data-theme={theme} className="min-h-dvh bg-base-200">
      <div className="drawer">
        <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex min-h-dvh flex-col">
          <header className="sticky top-0 z-40">
            <Navbar
              drawerId={DRAWER_ID}
              className="h-16 px-0 overflow-hidden"
              showBurger={true}
              logo={
                <a href="/" aria-label="Inicio — Mi App">
                  <img
                    src="/imagenes/logo.png"
                    alt="Mi App"
                    className="h-16 w-auto block"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </a>
              }
              homeHref="/app"
            />
          </header>

          <main className="flex-1 pt-16">
            <ProfileDashboard user={user} history={history} favorites={favorites} />
          </main>
        </div>

        <Sidebar
          drawerId={DRAWER_ID}
          theme={theme}
          setTheme={setTheme}
          homeHref="/app"
        />
      </div>
    </div>
  );
}
