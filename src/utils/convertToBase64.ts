export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error('Failed file covert to base64 string'));
      }
    };
    reader.onerror = () => {
      reject(new Error('Failed read file'));
    };
    reader.readAsDataURL(file);
  });
};
