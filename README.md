# eslint-config-bonzai

[![GitHub license](https://img.shields.io/github/license/bonzaico/eslint-config-bonzai.svg?style=flat-square)](https://github.com/bonzaico/eslint-config-bonzai/blob/master/LICENSE.md)

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