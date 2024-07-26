<#
.SYNOPSIS
Runs the Zero Trust Assessment against the signed in tenant and generates a report of the findings.

.DESCRIPTION
This function is only a sample Advanced function that returns the Data given via parameter Data.

.EXAMPLE
Invoke-ZeroTrustAssessment

Run the Zero Trust Assessment against the signed in tenant and generates a report of the findings.
#>

function Invoke-ZtAssessment
{
    [Alias('Invoke-ZeroTrustAssessment')]
    [CmdletBinding()]
    param (
        # The path to the folder folder to output the report to. If not specified, the report will be output to the current directory.
        [string]
        $Path = "./ZeroTrustReport"
    )

    # Stop if folder has items inside it
    if (Test-Path $Path) {
        if ((Get-ChildItem $Path).Count -gt 0) {
            Write-Error "Folder $Path is not empty. Please provide a path to an empty folder."
            return
        }
    }

    if (!(Test-ZtContext)){ return }

    Clear-ZtModuleVariable # Reset the graph cache and urls to avoid stale data

    Write-Verbose 'Creating report folder $OutputFolder'
    New-Item -ItemType Directory -Path $Path -ErrorAction Stop | Out-Null

    # Collect data
    # Export-TenantData -Path $Path


    # Run the tests
    $assessmentResults = Invoke-ZtTests -Path $Path
    $assessmentResultsJson = $assessmentResults | ConvertTo-Json -Depth 10
    $resultsJsonPath = Join-Path $Path "ZeroTrustAssessmentReport.json"
    $assessmentResultsJson | Out-File -FilePath $resultsJsonPath

    Write-ZtProgress -Activity "Creating html report"
    $htmlReportPath = Join-Path $Path "ZeroTrustAssessmentReport.html"
    $output = Get-HtmlReport -AssessmentResults $assessmentResultsJson
    $output | Out-File -FilePath $htmlReportPath -Encoding UTF8

    Write-Host "🛡️ Zero Trust Assessmet report generated at $htmlReportPath" -ForegroundColor Green

    Invoke-Item $htmlReportPath | Out-Null
}
