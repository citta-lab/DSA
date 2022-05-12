import collections
import string;

class Tracker:
    def __init__(self):
        self.host_types = collections.defaultdict(list)
    
    def allocate(self, host_type):
        '''function to allocate new server numbers'''
        available = self.next_server_number(self.host_types[host_type])
        # print(self.host_types)
        self.host_types[host_type].append(available)
        return '{}{}'.format(host_type, available)
    
    def deallocate(self, hostname):
        '''function to deallocate the inputted server'''
        last_letter = 0
        for (i,char) in enumerate(hostname):
            if char in string.ascii_letters:
                last_letter = i
        
        host_num = hostname[last_letter+1:]
        host_type = hostname[:last_letter+1]

        # print(host_num)
        # print(self.host_types)
        self.host_types[host_type].remove(int(host_num))
        return None
    
    def next_server_number(self, current_numbers):
        '''function to detect lowest available server number'''
        if not current_numbers:
            return 1
        else:
            highest_number = max(current_numbers)
            for num in range(1,highest_number):
                if num not in current_numbers:
                    return num
            return highest_number + 1


tracker = Tracker()
print(tracker.allocate("apibox"))
print(tracker.allocate("apibox"))
print(tracker.deallocate("apibox1"))
print(tracker.allocate("apibox"))
print(tracker.allocate("sitebox"))