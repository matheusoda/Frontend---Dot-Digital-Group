import React from "react";

interface ThemesFilterProps {
  selectedThemes: string[];
  onChange: (themes: string[]) => void;
}

const ALL_THEMES = ["inovação", "tecnologia", "marketing", "empreendedorismo", "agro"];

export const ThemesFilter: React.FC<ThemesFilterProps> = ({ selectedThemes, onChange }) => {
  const toggleTheme = (theme: string) => {
    if (selectedThemes.includes(theme)) {
      onChange(selectedThemes.filter(t => t !== theme));
    } else {
      onChange([...selectedThemes, theme]);
    }
  };

  return (
    <div className="themes-filter">
      {ALL_THEMES.map((theme) => (
        <label key={theme}>
          <input
            type="checkbox"
            checked={selectedThemes.includes(theme)}
            onChange={() => toggleTheme(theme)}
          />
          {theme}
        </label>
      ))}
    </div>
  );
};
