/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * What to order by.
 */

export type WidgetOrderBy =
  | typeof CHANGE
  | typeof NAME
  | typeof PRESENT
  | typeof PAST;
export const CHANGE = "change";
export const NAME = "name";
export const PRESENT = "present";
export const PAST = "past";
