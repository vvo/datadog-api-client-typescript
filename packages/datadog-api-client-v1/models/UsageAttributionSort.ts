/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * The field to sort by.
 */

export type UsageAttributionSort =
  | typeof API_PERCENTAGE
  | typeof SNMP_USAGE
  | typeof APM_HOST_USAGE
  | typeof API_USAGE
  | typeof APPSEC_USAGE
  | typeof APPSEC_PERCENTAGE
  | typeof CONTAINER_USAGE
  | typeof CUSTOM_TIMESERIES_PERCENTAGE
  | typeof CONTAINER_PERCENTAGE
  | typeof APM_HOST_PERCENTAGE
  | typeof NPM_HOST_PERCENTAGE
  | typeof BROWSER_PERCENTAGE
  | typeof BROWSER_USAGE
  | typeof INFRA_HOST_PERCENTAGE
  | typeof SNMP_PERCENTAGE
  | typeof NPM_HOST_USAGE
  | typeof INFRA_HOST_USAGE
  | typeof CUSTOM_TIMESERIES_USAGE
  | typeof LAMBDA_FUNCTIONS_USAGE
  | typeof LAMBDA_FUNCTIONS_PERCENTAGE
  | typeof LAMBDA_INVOCATIONS_USAGE
  | typeof LAMBDA_INVOCATIONS_PERCENTAGE
  | typeof ESTIMATED_INDEXED_LOGS_USAGE
  | typeof ESTIMATED_INDEXED_LOGS_PERCENTAGE
  | typeof ESTIMATED_INGESTED_LOGS_USAGE
  | typeof ESTIMATED_INGESTED_LOGS_PERCENTAGE
  | typeof ESTIMATED_INDEXED_SPANS_USAGE
  | typeof ESTIMATED_INDEXED_SPANS_PERCENTAGE
  | typeof ESTIMATED_INGESTED_SPANS_USAGE
  | typeof ESTIMATED_INGESTED_SPANS_PERCENTAGE
  | typeof APM_FARGATE_USAGE
  | typeof APM_FARGATE_PERCENTAGE
  | typeof APPSEC_FARGATE_USAGE
  | typeof APPSEC_FARGATE_PERCENTAGE;
export const API_PERCENTAGE = "api_percentage";
export const SNMP_USAGE = "snmp_usage";
export const APM_HOST_USAGE = "apm_host_usage";
export const API_USAGE = "api_usage";
export const APPSEC_USAGE = "appsec_usage";
export const APPSEC_PERCENTAGE = "appsec_percentage";
export const CONTAINER_USAGE = "container_usage";
export const CUSTOM_TIMESERIES_PERCENTAGE = "custom_timeseries_percentage";
export const CONTAINER_PERCENTAGE = "container_percentage";
export const APM_HOST_PERCENTAGE = "apm_host_percentage";
export const NPM_HOST_PERCENTAGE = "npm_host_percentage";
export const BROWSER_PERCENTAGE = "browser_percentage";
export const BROWSER_USAGE = "browser_usage";
export const INFRA_HOST_PERCENTAGE = "infra_host_percentage";
export const SNMP_PERCENTAGE = "snmp_percentage";
export const NPM_HOST_USAGE = "npm_host_usage";
export const INFRA_HOST_USAGE = "infra_host_usage";
export const CUSTOM_TIMESERIES_USAGE = "custom_timeseries_usage";
export const LAMBDA_FUNCTIONS_USAGE = "lambda_functions_usage";
export const LAMBDA_FUNCTIONS_PERCENTAGE = "lambda_functions_percentage";
export const LAMBDA_INVOCATIONS_USAGE = "lambda_invocations_usage";
export const LAMBDA_INVOCATIONS_PERCENTAGE = "lambda_invocations_percentage";
export const ESTIMATED_INDEXED_LOGS_USAGE = "estimated_indexed_logs_usage";
export const ESTIMATED_INDEXED_LOGS_PERCENTAGE =
  "estimated_indexed_logs_percentage";
export const ESTIMATED_INGESTED_LOGS_USAGE = "estimated_ingested_logs_usage";
export const ESTIMATED_INGESTED_LOGS_PERCENTAGE =
  "estimated_ingested_logs_percentage";
export const ESTIMATED_INDEXED_SPANS_USAGE = "estimated_indexed_spans_usage";
export const ESTIMATED_INDEXED_SPANS_PERCENTAGE =
  "estimated_indexed_spans_percentage";
export const ESTIMATED_INGESTED_SPANS_USAGE = "estimated_ingested_spans_usage";
export const ESTIMATED_INGESTED_SPANS_PERCENTAGE =
  "estimated_ingested_spans_percentage";
export const APM_FARGATE_USAGE = "apm_fargate_usage";
export const APM_FARGATE_PERCENTAGE = "apm_fargate_percentage";
export const APPSEC_FARGATE_USAGE = "appsec_fargate_usage";
export const APPSEC_FARGATE_PERCENTAGE = "appsec_fargate_percentage";
