
# diff

  Calculate diffs between strings. This component is a simple wrapper around [jsdifflib](https://github.com/cemerick/jsdifflib), by Chas Emerick.

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/diff

## API

### diff(oldText, newText)

Returns a diff between two strings, `oldText` and `newText`.

#### Return format

The return value is an array of "opcodes", describing what has changed and what has remained the same from `oldText` to `newText`.
Each "opcode" is itself an array with the following elements:

    [opname, o1, o2, n1, n2]

* `opname` is the name of the operation, can be either: `'equal'`, `'insert'`, `'delete'` or `'replace'`.
* `o1` and `o2` are the start and end point of the original content on `oldText`.
* `n1` and `n2` are the start and end point of the updated content on `newText`.

### diff.lib

Exposes the underlying `difflib` object, that can be used for fiddling with the internal diff implementation settings.

## License

Copyright (c) 2007, Snowtide Informatics Systems, Inc.
Copyright (c) 2014, Automattic, Inc.

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
    * Neither the name of the Snowtide Informatics Systems nor the names of its
        contributors may be used to endorse or promote products derived from this
        software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
DAMAGE.
