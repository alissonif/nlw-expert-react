import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
const note = {
  date: new Date(),
  content: "Hello world",
};
{
  formatDistanceToNow(note.date, {
    locale: ptBR,
    addSuffix: true,
  });
}
export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque as suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard note={note} />
        <NoteCard note={note} />
        <NoteCard note={note} />
      </div>
    </div>
  );
}
