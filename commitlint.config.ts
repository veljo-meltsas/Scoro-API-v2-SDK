import { UserConfig, RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
    extends: [
        "@commitlint/config-conventional"
    ],
    rules: {
        "body-max-line-length": [RuleConfigSeverity.Warning, "always", 100],
    }
};

export default Configuration;
