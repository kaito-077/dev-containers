# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code (claude.ai/code) 向けのガイダンスです。

## 改修作業のルール（重要）

**`main` ブランチ上で直接、改修作業やファイル変更を行ってはならない。改修作業を行う際は、必ず `main` から新しい git worktree を作成し、その worktree 上で作業すること。**

worktree はリポジトリ内の `.claude/worktrees/<name>` 配下に作成する（VS Code のエクスプローラーから見える場所に置くため）。ブランチ名は `worktree-<name>` とする。

worktree を作成する前に、必ず `main` ブランチを最新化すること。最新化した `main` から worktree を作成する。

### worktree の作成手順

```bash
git checkout main
git -c credential.helper= pull claude-code main
git worktree add .claude/worktrees/<name> -b worktree-<name> main
```

例: タスク名 `add-xxx` の場合

```bash
git worktree add .claude/worktrees/add-xxx -b worktree-add-xxx main
```

以降、そのタスクに関するファイル変更・コミットはすべてこの worktree 内で行う。

### 作業完了後

PRのマージ後など、worktree が不要になったら削除する。

```bash
git worktree remove .claude/worktrees/<name>
```

`git worktree list` で現在のworktree一覧を確認できる。
