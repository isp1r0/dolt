// This file was generated by nomdl/codegen.
// @flow
// eslint-disable max-len

import * as _noms from '@attic/noms';

{
  const pkg = new _noms.Package([
    _noms.makeStructType('Tree',
      [
        new _noms.Field('children', _noms.makeCompoundType(_noms.Kind.List, _noms.makeType(new _noms.Ref(), 0)), false),
      ],
      [

      ]
    ),
  ], [
  ]);
  _noms.registerPackage(pkg);
}

// struct.tmpl
// list.tmpl
