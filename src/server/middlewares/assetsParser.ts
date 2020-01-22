import { getGroupedAssets, getRequire } from '@server/lib/utils';
import { NextFunction, Request, Response } from 'express-serve-static-core';
import fs from 'fs';
import path from 'path';

export function assetsParser(fromManifest: boolean) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (fromManifest) {
      const assetsJson = path.resolve(process.cwd(), 'dist/asset-manifest.json');
      let staticFiles: any = {}; // tslint:disable-line

      if (fs.existsSync(assetsJson)) {
        staticFiles = getRequire()(assetsJson);
      }

      res.locals.assets = getGroupedAssets(staticFiles);
      return next();
    }

    const { assetsByChunkName } = res.locals.webpackStats.toJson();

    res.locals.assets = getGroupedAssets(assetsByChunkName);

    return next();
  };
}
