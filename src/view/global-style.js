import config from '../../config';

export const gutters = {
    medium: 10,
    large: 20,
};

export const colors = {
    ...config.colors,
};

export const button = {
    padding: `${gutters.medium}px ${gutters.large}px`,
    border: 'none',
    borderRadius: 4,
    backgroundColor: colors.action,
    color: colors.text,
};

export const contentWidth = 980;

export const container = {
    maxWidth: contentWidth,
    margin: '0 auto',
    padding: gutters.large * 2,
};

