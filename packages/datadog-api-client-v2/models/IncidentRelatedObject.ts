/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Object related to an incident.
 */

export type IncidentRelatedObject = typeof USERS | typeof ATTACHMENTS;
export const USERS = "users";
export const ATTACHMENTS = "attachments";
