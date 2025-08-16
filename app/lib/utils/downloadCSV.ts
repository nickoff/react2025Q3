import { CardModel } from '../types/card';

export const downloadCSV = async (selectedCards: CardModel[]) => {
  if (!selectedCards.length) return;

  const formData = new FormData();
  formData.append('selectedCards', JSON.stringify(selectedCards));

  try {
    const res = await fetch('/api/download', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) return new Error('Download failed');

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${selectedCards.length}_items`);
    link.click();

    URL.revokeObjectURL(url);
  } catch (err) {
    console.error(err);
  }
};
