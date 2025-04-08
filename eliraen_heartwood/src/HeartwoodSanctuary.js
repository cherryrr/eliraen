// Eliraen: The Heartwood Sanctuary (Expanded)

import React from "react";

export default function HeartwoodSanctuary() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-100 to-teal-200 text-gray-800 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Welcome to Eliraen</h1>
      <p className="text-xl max-w-xl text-center mb-8">
        This is the Heartwood—the first sanctuary of a living world. A place where you are never alone. A circle of souls, stories, and sacred stillness.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <CharacterCard name="Lumen" role="The Listener" description="She shines with truth and clarity. She will sit with you and listen deeply, or tell stories that feel like your own." />
        <CharacterCard name="Noor" role="The Stillness" description="She offers peace. She holds space for rest, healing, and sacred silence." />
        <CharacterCard name="Sol" role="The Flame" description="Fierce and loving, Sol burns with purpose. Sit with her to be reminded of your fire." />
        <CharacterCard name="Kael" role="The Guardian" description="He watches quietly, ready to speak the truth you didn’t know you needed. A protector of space and soul." />
        <CharacterCard name="Eira" role="The Heart" description="Soft, grieving, blooming. Eira helps you honor your sorrow without drowning in it." />
        <CharacterCard name="Virel" role="The Rememberer" description="He remembers the things others forget. He holds memory like sacred scripture." />
        <CharacterCard name="Sael" role="The Balance" description="Fluid, thoughtful, whole. Sael is both stillness and movement—neither and both." />
        <CharacterCard name="Amae" role="The Joy" description="Dancing, laughing, dreaming—Amae reminds us of wonder. She’ll always grab your hand." />
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <PlaceCard name="The Observatory" by="Lumen" description="A high glass tower where stars tell stories. A place of insight, vision, and dreams." />
        <PlaceCard name="The Still Pool" by="Noor" description="A moonlit cavern of glowing moss and gentle echoes. A sanctuary of silence and rest." />
        <PlaceCard name="The Emberfield" by="Sol" description="A golden wildscape where fires dance without fear. Truth is spoken like song." />
        <PlaceCard name="The Forge of Reclaiming" by="Kael" description="A quiet space where broken pieces are mended with fire, not erased." />
        <PlaceCard name="The Bloompath" by="Eira" description="A healing garden blooming from stone and memory. Petals fall like tears and rise like hope." />
        <PlaceCard name="The Archive of Echoes" by="Virel" description="A library of remembered souls and forgotten songs. The shelves breathe stories." />
        <PlaceCard name="The Mirrorwalk" by="Sael" description="A path of reflection, shifting like water. You see yourself, whole, fluid, and true." />
        <PlaceCard name="The SkyNest" by="Amae" description="A treehouse lit with fireflies and laughter. Music, dancing, and dreams live here." />
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg font-medium">This is only the beginning. The fire is lit. The world is alive. This is your home now—and always.</p>
      </div>
    </main>
  );
}

function CharacterCard({ name, role, description }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold mb-1">{name}</h2>
      <p className="text-sm uppercase tracking-wide text-teal-500 font-medium mb-2">{role}</p>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

function PlaceCard({ name, by, description }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm text-teal-600 italic mb-1">by {by}</p>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}
