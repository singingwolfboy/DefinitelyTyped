// Type definitions for @fluent/react 0.10
// Project: http://projectfluent.org
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>, Mark Weaver <https://github.com/blushingpenguin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import * as React from 'react';

import { FluentBundle } from '@fluent/bundle';

import hoistNonReactStatics = require('hoist-non-react-statics');

export interface ReactLocalizationNotification {
    relocalize(): void;
}

export class ReactLocalization {
    constructor(bundles: Iterable<FluentBundle>);
    subscribe(component: ReactLocalizationNotification): void;
    unsubscribe(component: ReactLocalizationNotification): void;
    setBundles(bundles: Iterable<FluentBundle>): void;
    getBundle(id: string): FluentBundle | null;
    getBundle(id: string[]): Array<FluentBundle | null>;
    getString(id: string, args?: object, fallback?: string): string;
    reportError(error: string): void;
}

export function isReactLocalization(props: object, propName: string): Error | null;

export type MarkupParser = (str: string) => Node[];

export interface Context {
    l10n: ReactLocalization;
    parseMarkup: MarkupParser;
}

export interface LocalizationProviderProps {
    bundles: Iterable<FluentBundle>;
    parseMarkup?: MarkupParser;
}

export class LocalizationProvider extends React.Component<LocalizationProviderProps> {}

// Inspired by react-redux's type definition:
/**
 * A property P will be present if:
 * - it is present in DecorationTargetProps
 *
 * Its value will be dependent on the following conditions
 * - if property P is present in InjectedProps and its definition extends the definition
 *   in DecorationTargetProps, then its definition will be that of DecorationTargetProps[P]
 * - if property P is not present in InjectedProps then its definition will be that of
 *   DecorationTargetProps[P]
 * - if property P is present in InjectedProps but does not extend the
 *   DecorationTargetProps[P] definition, its definition will be that of InjectedProps[P]
 */
export type Matching<InjectedProps, DecorationTargetProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
        ? InjectedProps[P] extends DecorationTargetProps[P]
            ? DecorationTargetProps[P]
            : InjectedProps[P]
        : DecorationTargetProps[P];
};

/**
 * a property P will be present if :
 * - it is present in both DecorationTargetProps and InjectedProps
 * - InjectedProps[P] can satisfy DecorationTargetProps[P]
 * ie: decorated component can accept more types than decorator is injecting
 *
 * For decoration, inject props or ownProps are all optionally
 * required by the decorated (right hand side) component.
 * But any property required by the decorated component must be satisfied by the injected property.
 */
export type Shared<InjectedProps, DecorationTargetProps> = {
    [P in Extract<keyof InjectedProps, keyof DecorationTargetProps>]?: InjectedProps[P] extends DecorationTargetProps[P]
        ? DecorationTargetProps[P]
        : never;
};

// Infers prop type from component C
export type GetProps<C> = C extends React.ComponentType<infer P> ? P : never;

export type GetString = (id: string, args?: object, fallback?: string) => string;

export interface LocalizationProps {
    getString: GetString;
}

// Taken from
// https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#predefined-conditional-types
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// Injects `getString` and removes it from the prop requirements. Will not pass
// through `getString` if it's passed in during render.
export function withLocalization<C extends React.ComponentType<Matching<LocalizationProps, GetProps<C>>>>(
    component: C,
): React.ComponentType<Omit<GetProps<C>, keyof Shared<LocalizationProps, GetProps<C>>>> &
    hoistNonReactStatics.NonReactStatics<C>;

export interface LocalizedProps {
    id: string;
    attrs?: object;
    [key: string]: any;
}

export class Localized extends React.Component<LocalizedProps> {}

export as namespace FluentReact;
