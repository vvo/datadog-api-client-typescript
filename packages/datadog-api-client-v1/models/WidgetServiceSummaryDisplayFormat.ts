/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Number of columns to display.
 */

export type WidgetServiceSummaryDisplayFormat =
  | typeof ONE_COLUMN
  | typeof TWO_COLUMN
  | typeof THREE_COLUMN;
export const ONE_COLUMN = "one_column";
export const TWO_COLUMN = "two_column";
export const THREE_COLUMN = "three_column";
