# Environment

- **Python**: managed with `uv` (installed via Homebrew). Use `uv run` or `uv add` — never `pip install` directly.
- **Node/JS**: Bun is the package manager (installed via Homebrew). Use `bun` instead of `npm` or `npx`.

# Python conventions

- **DataFrames**: always use **Polars** for dataframe operations (not pandas).
- **Visualizations**: always use **Altair** (not matplotlib or plotly).
