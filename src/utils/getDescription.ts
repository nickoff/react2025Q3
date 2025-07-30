export const getDescription = async (mal_id?: string) => {
  if (!mal_id) return null;
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    const { data } = await res.json();
    return { data };
  } catch (error) {
    return { data: null, error };
  }
};
