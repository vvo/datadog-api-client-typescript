/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Define how you want to align the text on the widget.
 */

export type WidgetTickEdge =
  | typeof BOTTOM
  | typeof LEFT
  | typeof RIGHT
  | typeof TOP;
export const BOTTOM = "bottom";
export const LEFT = "left";
export const RIGHT = "right";
export const TOP = "top";
