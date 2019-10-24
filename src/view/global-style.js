import config from '../../config';

export const gutters = {
    medium: 8,
    large: 16,
};

export const colors = {
    ...config.colors,
};

export const button = {
    padding: `${gutters.medium}px ${gutters.large}px`,
    border: 'none',
    backgroundColor: colors.action,
    color: colors.text,
};

export const contentWidth = 980;

export const container = {
    maxWidth: contentWidth,
    margin: '0 auto',
    paddingLeft: gutters.large * 2,
    paddingRight: gutters.large * 2,
};
