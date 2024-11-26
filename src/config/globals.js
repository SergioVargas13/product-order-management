export const generateNewId = (obj) => {
  let maxId = obj.value.length > 0 ? Math.max(...obj.value.map(item => item.id)) : 0;
  return ++maxId;
};