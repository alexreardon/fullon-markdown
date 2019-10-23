import config from '../../config';
import { inherits } from 'util';

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
