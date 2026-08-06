import { useMemo, useState } from "react";
import { people } from "../data/people";

export function TeamDirectory() {
  const [query, setQuery] = useState("");

  const filteredPeople = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return people;

    return people.filter((person) => {
      const haystack = [
        person.name,
        person.team,
        person.role,
        ...person.skills,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  const handleClearSearch = () => {
    setQuery("");
  };

  return (
    <div className="directory">
      <h1>Team Directory</h1>

      <label htmlFor="search" className="search-label">
        Search by name, team, role, or skill
      </label>
      <div className="search-wrapper">
        <input
          id="search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="search-input"
          autoComplete="off"
        />
        {query && (
          <button
            className="clear-button"
            onClick={handleClearSearch}
            aria-label="Clear search"
            type="button"
          >
            ✕
          </button>
        )}
      </div>

      <p className="result-count" aria-live="polite">
        {filteredPeople.length} {filteredPeople.length === 1 ? "person" : "people"} found
      </p>

      {filteredPeople.length === 0 ? (
        <p className="empty-state">No matches. Try a different search term.</p>
      ) : (
        <ul className="people-list">
          {filteredPeople.map((person) => (
            <li key={person.id} className="person-card">
              <h2>{person.name}</h2>
              <p className="role">{person.role} · {person.team}</p>
              <ul className="skills">
                {person.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}