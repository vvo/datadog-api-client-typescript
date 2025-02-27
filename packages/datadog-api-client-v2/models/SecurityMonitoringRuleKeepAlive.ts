/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Once a signal is generated, the signal will remain “open” if a case is matched at least once within
 * this keep alive window.
 */

export type SecurityMonitoringRuleKeepAlive =
  | typeof ZERO_MINUTES
  | typeof ONE_MINUTE
  | typeof FIVE_MINUTES
  | typeof TEN_MINUTES
  | typeof FIFTEEN_MINUTES
  | typeof THIRTY_MINUTES
  | typeof ONE_HOUR
  | typeof TWO_HOURS
  | typeof THREE_HOURS
  | typeof SIX_HOURS;
export const ZERO_MINUTES = 0;
export const ONE_MINUTE = 60;
export const FIVE_MINUTES = 300;
export const TEN_MINUTES = 600;
export const FIFTEEN_MINUTES = 900;
export const THIRTY_MINUTES = 1800;
export const ONE_HOUR = 3600;
export const TWO_HOURS = 7200;
export const THREE_HOURS = 10800;
export const SIX_HOURS = 21600;
