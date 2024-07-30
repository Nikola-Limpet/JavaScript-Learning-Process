def fcfs_scheduling(processes):
    n = len(processes)
    wait_time = [0] * n
    turnaround_time = [0] * n

    # Calculating waiting time
    for i in range(1, n):
        wait_time[i] = processes[i - 1][1] + wait_time[i - 1]

    # Calculating turnaround time
    for i in range(n):
        turnaround_time[i] = processes[i][1] + wait_time[i]

    # Calculating average waiting and turnaround time
    avg_wait_time = sum(wait_time) / n
    avg_turnaround_time = sum(turnaround_time) / n

    print("Processes    Burst Time    Waiting Time    Turnaround Time")
    for i in range(n):
        print(f"{processes[i][0]}             {processes[i][1]}             {wait_time[i]}             {turnaround_time[i]}")

    print(f"\nAverage Waiting Time: {avg_wait_time}")
    print(f"Average Turnaround Time: {avg_turnaround_time}")

# Example usage
processes = [(1, 24), (2, 3), (3, 3)]  # (process_id, burst_time)
fcfs_scheduling(processes)

#