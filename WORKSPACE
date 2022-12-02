workspace(name = "rules_jest_ts_bug")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "aspect_rules_ts",
    sha256 = "5b501313118b06093497b6429f124b973f99d1eb5a27a1cc372e5d6836360e9d",
    strip_prefix = "rules_ts-1.0.2",
    url = "https://github.com/aspect-build/rules_ts/archive/refs/tags/v1.0.2.tar.gz",
)

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(ts_version = "4.8.3")

# Fetch and register node, if you haven't already
load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "node",
    node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    pnpm_lock = "//:pnpm-lock.yaml",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

http_archive(
    name = "aspect_rules_jest",
    sha256 = "dd596891aa893048d2e8d210fce214459df33d454bf0e77906ebbfaee38f2bbc",
    strip_prefix = "rules_jest-0.12.1",
    url = "https://github.com/aspect-build/rules_jest/archive/refs/tags/v0.12.1.tar.gz",
)

load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")

rules_jest_dependencies()

# Fetches the npm packages for jest-cli.
load("@aspect_rules_jest//jest:repositories.bzl", "jest_repositories")

jest_repositories(name = "jest")

load("@jest//:npm_repositories.bzl", jest_npm_repositories = "npm_repositories")

jest_npm_repositories()
