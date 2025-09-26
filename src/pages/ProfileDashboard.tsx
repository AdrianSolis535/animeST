import React from "react";

/* Tipos */
export interface Anime {
  readonly id: string;
  readonly title: string;
  readonly cover: string;
  readonly episodesSeen: number;
  readonly episodesTotal: number;
  readonly lastWatchedAt?: string;
  readonly score?: number;
}

export interface UserProfile {
  readonly username: string;
  readonly email: string;
  readonly avatarUrl: string;
  readonly joinDate?: string;
  readonly about?: string;
}

/* Card genérica */
type SectionCardProps = Readonly<React.PropsWithChildren<{ title: string }>>;
function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-5 transition-colors">
      <h2 className="text-lg md:text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

/* Props del Dashboard */
export interface ProfileDashboardProps {
  readonly user: UserProfile;
  readonly history: ReadonlyArray<Anime>;
  readonly favorites: ReadonlyArray<Anime>;
}

/* Componente (sin framer-motion) */
export default function ProfileDashboard({
  user,
  history,
  favorites,
}: Readonly<ProfileDashboardProps>) {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 transition-colors">
      {/* Perfil de usuario */}
      <section className="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-5 transition-colors">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Perfil de usuario</h2>
        <div className="flex items-center gap-4">
          <img
            src={user.avatarUrl}
            alt={user.username}
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div>
            <div className="text-xl font-semibold">{user.username}</div>
            <div className="text-sm opacity-80">{user.email}</div>
            {user.about && (
              <p className="text-sm opacity-80 mt-1 line-clamp-2">{user.about}</p>
            )}
          </div>
        </div>
      </section>

      {/* Resumen */}
      <div className="mt-6">
        <SectionCard title="Resumen">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl border border-base-200 bg-base-200/60 dark:bg-base-200/40 transition-colors">
              <div className="text-xs opacity-70">En historial</div>
              <div className="text-xl font-semibold">{history.length}</div>
            </div>
            <div className="p-4 rounded-xl border border-base-200 bg-base-200/60 dark:bg-base-200/40 transition-colors">
              <div className="text-xs opacity-70">Favoritos</div>
              <div className="text-xl font-semibold">{favorites.length}</div>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Contenido principal */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard title="Historial reciente">{/* tu lista */}</SectionCard>
        <div className="lg:col-span-2">
          <SectionCard title="Favoritos">{/* tu grid */}</SectionCard>
          <div className="mt-6">
            <SectionCard title="Progreso">{/* tus barras */}</SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
