// This file was generated by nomdl/codegen.
// @flow
// eslint-disable max-len

import * as _noms from '@attic/noms';

{
  const pkg = new _noms.Package([
    _noms.makeEnumType('Handedness', 'right', 'left', 'switch'),
    _noms.makeStructType('EnumStruct',
      [
        new _noms.Field('hand', _noms.makeType(new _noms.Ref(), 0), false),
      ],
      [

      ]
    ),
  ], [
  ]);
  _noms.registerPackage(pkg);
}

// enum.tmpl
// struct.tmpl
