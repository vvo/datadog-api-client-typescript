/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Encoding type. Can be given either `json` or `form`.
 */

export type WebhooksIntegrationEncoding = typeof JSON | typeof FORM;
export const JSON = "json";
export const FORM = "form";
