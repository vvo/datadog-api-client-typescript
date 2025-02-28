/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * The status of a service check.
 */

export type ServiceCheckStatus =
  | typeof OK
  | typeof WARNING
  | typeof CRITICAL
  | typeof UNKNOWN;
export const OK = 0;
export const WARNING = 1;
export const CRITICAL = 2;
export const UNKNOWN = 3;
