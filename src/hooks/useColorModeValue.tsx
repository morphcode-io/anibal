"use client";
import { useTheme } from 'next-themes';

export const useColorModeValue = function<T>(lightValue: T, darkValue: T): T {
    const { theme, systemTheme } = useTheme();
    
    if (theme === 'system') {
        return systemTheme === 'dark' ? darkValue : lightValue;
    }
    
    return theme === 'dark' ? darkValue : lightValue;
}