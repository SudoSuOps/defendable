# Machine-Readable Truth Repair v0.1

Date: 2026-05-26
Builder: Codex

## Scope

This repair updates only machine-readable and metadata claim surfaces that
contradicted the accepted audited public state.

Repos changed:
- `defendable`
- `defendable-cloud`
- `open-defendable`

Repo inspected but not changed:
- `defendable-router`

## Baselines

- `defendable`: `ea550f956656bcc9833f54d97c670c2a7fbb7525`
- `defendable-cloud`: `63847e011ae80f4304d077294a5318792bf41555`
- `open-defendable`: `fca71061a30d52613f0db7579cfed6509a9d14ea`
- `defendable-router`: `134662a7dc6debf3fb915664dda2a05f4a25a9fe`

## Source repair commits

- `defendable`: `6126b3edf974ab6a94ea2dbff7bc8114d4db4239`
- `defendable-cloud`: `d2962fec10413aa15f9cacce73456ae59d1794e6`
- `open-defendable`: `880030dc4b70f0ab982824741b4f414c5ac3d383`

## Repair result

- DefendableOS `llms.txt` now distinguishes verified AgentOps surfaces from
  roadmap / active-build AIOV surfaces.
- DefendableOS `llms.txt` now correctly points Docs to
  `https://defendabledocs.com/`.
- DefendableCloud `llms.txt` now leads with controlled synthetic demo status
  and limitations.
- OpenDefendable `llms.txt` now describes a truth surface in formation, not a
  formal standards body.
- DefendableCloud `package.json` now matches the verified public demo scope.
- `DEFENDABLE_CERTIFIED` was removed from public status/SEO surfaces and
  replaced with roadmap-only wording.

## Limitations

- This repair does not redesign human-facing product pages.
- This repair does not add features or change backend behavior.
- This repair does not grant production clearance, client-pilot approval,
  certification, insurance coverage, external SaaS enforcement approval, or
  blockchain anchoring.

