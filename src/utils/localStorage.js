const STORAGE_KEY = "installedApps";

export const getStoredApps = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const saveApp = (app) => {
    const apps = getStoredApps();

    const isExist = apps.find(item => item.id === app.id);
    if (isExist) return false;

    const updatedApps = [...apps, app];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedApps));

    return true;
};

export const removeApp = (id) => {
    const apps = getStoredApps();
    const updatedApps = apps.filter(app => app.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedApps));
};

export const isAppInstalled = (id) => {
    const apps = getStoredApps();
    return apps.find(app => app.id === id);
};