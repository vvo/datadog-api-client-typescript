/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * The type of metric. The available types are `0` (unspecified), `1` (count), `2` (rate), and `3` (gauge).
 */

export type MetricIntakeType =
  | typeof UNSPECIFIED
  | typeof COUNT
  | typeof RATE
  | typeof GAUGE;
export const UNSPECIFIED = 0;
export const COUNT = 1;
export const RATE = 2;
export const GAUGE = 3;
