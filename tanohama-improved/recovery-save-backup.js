// Preserve pre-recovery saves before the restored original runtime normalizes them.
for (const key of ['tanohamaImprovedStateV1','tanohamaImprovedStage2StateV1']) {
  try {
    const previous = localStorage.getItem(key);
    const backupKey = key + 'BeforeMediaRecoveryV1';
    if (previous && !localStorage.getItem(backupKey)) localStorage.setItem(backupKey,previous);
  } catch (_) { /* Existing runtime handles unavailable browser storage. */ }
}
