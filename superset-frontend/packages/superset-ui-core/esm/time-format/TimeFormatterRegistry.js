(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();import "core-js/modules/es.string.replace.js";var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { RegistryWithDefaultKey, OverwritePolicy } from '../models';
import TimeFormats, { LOCAL_PREFIX } from './TimeFormats';
import createD3TimeFormatter from './factories/createD3TimeFormatter';


export default class TimeFormatterRegistry extends RegistryWithDefaultKey


{
  constructor() {
    super({
      initialDefaultKey: TimeFormats.DATABASE_DATETIME,
      name: 'TimeFormatter',
      overwritePolicy: OverwritePolicy.WARN });

  }

  get(format) {
    const targetFormat = `${
    format === null || typeof format === 'undefined' || format === '' ?
    this.defaultKey :
    format
    }`.trim();

    if (this.has(targetFormat)) {
      return super.get(targetFormat);
    }

    // Create new formatter if does not exist
    const useLocalTime = targetFormat.startsWith(LOCAL_PREFIX);
    const formatString = targetFormat.replace(LOCAL_PREFIX, '');
    const formatter = createD3TimeFormatter({ formatString, useLocalTime });
    this.registerValue(targetFormat, formatter);

    return formatter;
  }

  format(format, value) {
    return this.get(format)(value);
  } // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {// @ts-ignore
    this[key] = eval(code);}};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(TimeFormatterRegistry, "TimeFormatterRegistry", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/time-format/TimeFormatterRegistry.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();