export const saveItem = (key: string, value: any) => {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
export const getItem = (key: string) => {
  const json = localStorage.getItem(key);
  return json != null ? JSON.parse(json) : null;
}
export const removeItem = (key: string) => {
  localStorage.removeItem(key);
}
export const clear = () => {
  localStorage.clear();
}

export const saveSessionStorage = (key: string, value: any) => {
  const json = JSON.stringify(value);
  sessionStorage.setItem(key, json);
}
export const getSessionStorage = (key: string) => {
  const json = sessionStorage.getItem(key);
  return json != null ? JSON.parse(json) : null;
}
export const clearSessionStorage = () => {
  sessionStorage.clear();
}
