# eslint-config-bonzai

[![version](https://img.shields.io/npm/v/eslint-config-bonzai.svg?style=flat-square)](http://npm.im/eslint-config-bonzai)
[![GitHub license](https://img.shields.io/github/license/bonzaico/eslint-config-bonzai.svg?style=flat-square)](https://github.com/bonzaico/eslint-config-bonzai/blob/master/LICENSE.md)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

This package provides Bonzai's .eslintrc as an extensible shared config.

## Usage

Install the configuration by executing:

```bash
npm install --save-dev eslint eslint-config-bonzai
```

Then add the extends to your `.eslintrc`

```json
{
  "extends": "bonzai",
  "rules": {
    // your overrides
  }
}
```

## License

BSD-3-Clause