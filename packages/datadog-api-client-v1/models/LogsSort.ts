/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Time-ascending `asc` or time-descending `desc` results.
 */

export type LogsSort = typeof TIME_ASCENDING | typeof TIME_DESCENDING;
export const TIME_ASCENDING = "asc";
export const TIME_DESCENDING = "desc";
