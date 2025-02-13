/*
 * Copyright 2023 Fair protocol
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { JWKInterface } from 'warp-contracts';
import Bundlr from '@bundlr-network/client/build/cjs/cjsIndex';
import { NODE2_BUNDLR_URL } from '../../common/utils/constants';

export const initBundlr = async (jwk?: JWKInterface) => {
  const bundlr = new Bundlr(NODE2_BUNDLR_URL, 'arweave', jwk || window.arweaveWallet);
  await bundlr.ready();

  return bundlr;
};
