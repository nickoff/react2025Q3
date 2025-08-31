# React2025Q3

## This is my implementation of the React app task, which was a part of the [RS School course React2025Q3](https://rs.school/courses/reactjs)

## 🚀 Performance Profiling

### Tested interactions: Filtering the list by searching for a country.

🔍 Initial performance profiling (Before Optimization)

- Commit Duration: 17.8s
- Max Component Render Time: 212.9ms — Component: `<FilterProvider>`
- Most Expensive Component: 187.2ms — `<MainTable>`
- Number of Re-renders: 3

#### **Flame Graph**

![flame](/src/assets/image/before/flame-filter-country.png)

#### **Ranked Chart**

![ranked](/src/assets/image/before/ranked-filter-country.png)

📌 Performance Profiling (After Optimization):

| Metric                          | Before     | After      | Change              |
|---------------------------------|------------|------------|---------------------|
| **Commit Duration**             | 17.8s      | 2.5s       | ↓ 85.96% improvement |
| **Max Render Time** (`<FilterProvider>`) | 212.9ms    | 216.9ms    | ↑ 1.88% regression   |
| **Most Expensive Component** (`<MainTable>`) | 187.2ms    | 193.5ms    | ↑ 3.37% regression   |
| **Number of Re-renders**        | 3          | 3          | — No change   |


#### **Flame Graph**

![flame](/src/assets/image/after/flame-filter-country.png)

#### **Ranked Chart**

![ranked](/src/assets/image/after/ranked-filter-country.png)

### Tested interactions: Filtering by year.

🔍 Initial performance profiling (Before Optimization)

- Commit Duration: 35.7s
- Max Component Render Time: 219.4ms — Component: `<FilterProvider>`
- Most Expensive Component: 195.2ms — `<MainTable>`
- Number of Re-renders: 3

#### **Flame Graph**

![flame](/src/assets/image/before/flame-filter-year.png)

#### **Ranked Chart**

![ranked](/src/assets/image/before/ranked-filter-year.png)

📌 Performance Profiling (After Optimization):

| Metric                          | Before     | After      | Change              |
|---------------------------------|------------|------------|---------------------|
| **Commit Duration**             | 35.7s      | 4.4s       | ↓ 87.68% improvement |
| **Max Render Time** (`<FilterProvider>`) | 219.4ms    | 222.1ms    | ↑ 1.23% regression   |
| **Most Expensive Component** (`<MainTable>`) | 195.2ms    | 192.7ms    | ↓ 1.28% improvement   |
| **Number of Re-renders**        | 3          | 3          | — No change   |


#### **Flame Graph**

![flame](/src/assets/image/after/flame-filter-year.png)

#### **Ranked Chart**

![ranked](/src/assets/image/after/ranked-filter-year.png)

### Tested interactions: Adding a column to the table.

🔍 Initial performance profiling (Before Optimization)

- Commit Duration: 3.7s
- Max Component Render Time: 225.8ms — Component: `<FilterProvider>`
- Most Expensive Component: 200.3ms — `<MainTable>`
- Number of Re-renders: 4

#### **Flame Graph**

![flame](/src/assets/image/before/flame-add-field.png)

#### **Ranked Chart**

![ranked](/src/assets/image/before/ranked-add-field.png)

📌 Performance Profiling (After Optimization):

| Metric                          | Before     | After      | Change              |
|---------------------------------|------------|------------|---------------------|
| **Commit Duration**             | 3.7s      | 1.6s       | ↓ 56.76% improvement |
| **Max Render Time** (`<FilterControls>`) | 225.8ms    | 20.9ms    | ↓ 90.74% improvement   |
| **Number of Re-renders**        | 4          | 4          | — No change   |

#### **Flame Graph**

![flame](/src/assets/image/after/flame-add-field.png)

#### **Ranked Chart**

![ranked](/src/assets/image/after/ranked-add-field.png)

### Tested interactions: Sorting countries by name.

🔍 Initial performance profiling (Before Optimization)

- Commit Duration: 16.5s
- Max Component Render Time: 139.6ms — Component: `<FilterProvider>`
- Most Expensive Component: 115.1ms — `<MainTable>`
- Number of Re-renders: 2

#### **Flame Graph**

![flame](/src/assets/image/before/flame-sort-by-name.png)

#### **Ranked Chart**

![ranked](/src/assets/image/before/ranked-sort-by-name.png)

📌 Performance Profiling (After Optimization):

| Metric                          | Before     | After      | Change              |
|---------------------------------|------------|------------|---------------------|
| **Commit Duration**             | 16.5s      | 2.7s       | ↓ 83.64% improvement |
| **Max Render Time** (`<FilterProvider>`) | 139.6ms    | 142.4ms    | ↑ 2.01% regression   |
| **Most Expensive Component** (`<MainTable>`) | 115.1ms    | 112.5ms    | ↓ 2.26% improvement   |
| **Number of Re-renders**        | 2          | 2          | — No change   |

#### **Flame Graph**

![flame](/src/assets/image/after/flame-sort-by-name.png)

#### **Ranked Chart**

![ranked](/src/assets/image/after/ranked-sort-by-name.png)

### Tested interactions: Sorting countries by population.

🔍 Initial performance profiling (Before Optimization)

- Commit Duration: 5.6s
- Max Component Render Time: 124.2ms — Component: `<FilterProvider>`
- Most Expensive Component: 103.0ms — `<MainTable>`
- Number of Re-renders: 2

#### **Flame Graph**

![flame](/src/assets/image/before/flame-sort-by-population.png)

#### **Ranked Chart**

![ranked](/src/assets/image/before/ranked-sort-by-population.png)

📌 Performance Profiling (After Optimization):

| Metric                          | Before     | After      | Change              |
|---------------------------------|------------|------------|---------------------|
| **Commit Duration**             | 5.6s      | 4.5s       | ↓ 19.64% improvement |
| **Max Render Time** (`<FilterProvider>`) | 124.2ms    | 155.9ms    | ↑ 25.56% regression   |
| **Most Expensive Component** (`<MainTable>`) | 103.0ms    | 114.9ms    | ↑ 11.60% regression   |
| **Number of Re-renders**        | 2          | 2          | — No change   |

#### **Flame Graph**

![flame](/src/assets/image/after/flame-sort-by-population.png)

#### **Ranked Chart**

![ranked](/src/assets/image/after/ranked-sort-by-population.png)

## 🧩 Optimization Summary

To improve performance, I applied several React optimization techniques:

- `useMemo` and `useCallback` to memoize filter and sort logic
- `React.memo` to prevent unnecessary re-renders of stable components
- `Suspense` to defer rendering of async-heavy UI parts

### 🔍 Key Insights

- However, memoizing filter and sort methods led to noticeable improvements in post-render responsiveness and commit duration.
- The most substantial gains were observed in interactions involving filtering and sorting, where commit duration dropped by up to **87%**.
- Render times for `<MainTable>` and `<FilterProvider>` remained mostly stable, with minor regressions due to unchanged component depth.
- Re-render counts stayed consistent, confirming that memoization effectively prevented redundant updates without altering render paths.

### 📈 Highlights

| Interaction                  | Commit Duration ↓ | MainTable Render | FilterProvider Render | Notes |
|-----------------------------|-------------------|------------------|------------------------|-------|
| Filter by country           | 85.96%            | ↑ 3.37%          | ↑ 1.88%                | Fast commit, stable render |
| Filter by year              | 87.68%            | ↓ 1.28%          | ↑ 1.23%                | Best overall gain |
| Add column to table         | 56.76%            | —                | ↓ 90.74%               | Major win on control render |
| Sort by name                | 83.64%            | ↓ 2.26%          | ↑ 2.01%                | Balanced result |
| Sort by population          | 19.64%            | ↑ 11.60%         | ↑ 25.56%               | Needs review |

> Overall, the optimizations improved perceived performance and responsiveness, especially during repeated interactions. Further gains may require restructuring how large datasets are rendered or virtualized.
