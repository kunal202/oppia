// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Object factory for creating and mutating entity context
 * objects.
 */

import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

export class EntityContext {
  _id: string;
  _type: string;

  constructor(id: string, type: string) {
    this._id = id;
    this._type = type;
  }

  getId(): string {
    return this._id;
  }

  getType(): string {
    return this._type;
  }
}

@Injectable({
  providedIn: 'root'
})
export class EntityContextObjectFactory {
  create(id: string, type: string): EntityContext {
    return new EntityContext(id, type);
  }
}

angular.module('oppia').factory(
  'EntityContextObjectFactory',
  downgradeInjectable(EntityContextObjectFactory));