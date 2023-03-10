import {
  ComplianceStatus,
  EntityType,
  SecurityType,
  SeverityLevel,
  Signal,
  SignalType,
  WorkflowStatus,
} from "../interfaces/signal";

export const getSimpleEDRSignal = (): Signal => {
  const signal: Signal = {
    version: "1.2.13",
    id: "bb332918-3319-470f-a18b-e75e326c9d7d",
    type: SignalType.default,
    name: "SuspiciousNetworkConnectionLin",
    source: {
      name: "A-unique-signal-submitter-name",
    },
    description:
      "A suspicious script launched that might be related to malicious activity. A variety of malware families use this technique. Review the script.",
    entity: {
      type: EntityType.machine,
      name: "MyVirtualMachine.acme.com",
      entityAttributes: {
        ipAddresses: [
          {
            name: "Ip",
            ipv4: "10.0.6.173",
          },
        ],
        type: "Windows Server 2019 Datacenter 64 bit Edition Version 1809 Build 17763",
      },
    },
    securityContexts: [
      {
        type: SecurityType.edr,
        status: {
          complianceStatus: ComplianceStatus.fail,
          workflowStatus: WorkflowStatus.new,
        },
        evidence: {
          observationText: "Suspicious script detected",
        },
        severity: {
          type: "custom",
          level: SeverityLevel.medium,
        },
        attackPattern: [
          {
            name: "Command and Scripting Interpreter",
            mapping: {
              techniqueName: "Command and Scripting Interpreter",
              techniqueId: "T1059",
            },
            sourceName: "ATT&CK",
          },
        ],
        tags: {
          detectionId: ["999e1e2a-effc-4317-b7b3-31e184d15481"],
          detectionTime: ["2023-03-08T11:42:28Z"],
          files: [
            '{"name":"suspicious-file","checksumSha256":"550a68076cd1bade01da6e7a359d5642d1222934a1a862f5045e17374ef89539","checksumMd5":"78979bd9288153580175da12d95f05b5","filePath":"/usr/bin/suspicious-file","commandLine":"/usr/bin/suspicious-file --systemd-watchdog","parentchecksumSha256":"","parentchecksumMd5":""}',
          ],
        },
      },
    ],
    firstSeen: new Date("2023-03-08T11:42:28Z"),
    confidence: 100,
    createdAt: new Date("2023-03-09T11:42:28Z"),
  };
  return signal;
};
